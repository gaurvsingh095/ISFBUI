// pages/api/compile.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ 
      success: false, 
      output: '',
      error: 'Code and language are required' 
    });
  }

  try {
    // Create a unique identifier for this compilation
    const id = uuidv4();
    const tempDir = path.join(process.cwd(), 'tmp');
    
    // Ensure the temp directory exists
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    let result;
    
    if (language === 'python') {
      result = await compilePython(code, id, tempDir);
    } else if (language === 'java') {
      result = await compileJava(code, id, tempDir);
    } else if (language === 'javascript') {
      result = await compileJavascript(code, id, tempDir);
    } else {
      return res.status(400).json({ 
        success: false,
        output: '',
        error: 'Unsupported language' 
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Compilation error:', error);
    return res.status(500).json({ 
      success: false,
      output: '',
      error: 'An error occurred during compilation' 
    });
  }
}

async function compilePython(code: string, id: string, tempDir: string): Promise<any> {
  const filePath = path.join(tempDir, `${id}.py`);
  
  // Write code to file
  fs.writeFileSync(filePath, code);
  
  return new Promise((resolve) => {
    exec(`python ${filePath}`, { timeout: 10000 }, (error, stdout, stderr) => {
      // Clean up the file
      try { fs.unlinkSync(filePath); } catch (e) { console.error('Failed to delete file:', e); }
      
      if (error) {
        resolve({
          success: false,
          output: '',
          error: stderr || error.message
        });
      } else {
        resolve({
          success: true,
          output: stdout
        });
      }
    });
  });
}

async function compileJava(code: string, id: string, tempDir: string): Promise<any> {
  // Extract the class name from the code
  const classNameMatch = code.match(/public\s+class\s+(\w+)/);
  const className = classNameMatch ? classNameMatch[1] : 'Solution';
  
  const filePath = path.join(tempDir, `${className}.java`);
  
  // Write code to file
  fs.writeFileSync(filePath, code);
  
  return new Promise((resolve) => {
    // Compile the Java code
    exec(`javac ${filePath}`, { timeout: 10000 }, (compileError, compileStdout, compileStderr) => {
      if (compileError) {
        // Clean up the file
        try { fs.unlinkSync(filePath); } catch (e) { console.error('Failed to delete file:', e); }
        
        resolve({
          success: false,
          output: '',
          error: compileStderr || compileError.message
        });
      } else {
        // Run the compiled Java code
        exec(`java -cp ${tempDir} ${className}`, { timeout: 10000 }, (runError, runStdout, runStderr) => {
          // Clean up files
          try { 
            fs.unlinkSync(filePath);
            fs.unlinkSync(path.join(tempDir, `${className}.class`));
          } catch (e) { 
            console.error('Failed to delete files:', e); 
          }
          
          if (runError) {
            resolve({
              success: false,
              output: '',
              error: runStderr || runError.message
            });
          } else {
            resolve({
              success: true,
              output: runStdout
            });
          }
        });
      }
    });
  });
}

async function compileJavascript(code: string, id: string, tempDir: string): Promise<any> {
  const filePath = path.join(tempDir, `${id}.js`);
  
  // Write code to file
  fs.writeFileSync(filePath, code);
  
  return new Promise((resolve) => {
    exec(`node ${filePath}`, { timeout: 10000 }, (error, stdout, stderr) => {
      // Clean up the file
      try { fs.unlinkSync(filePath); } catch (e) { console.error('Failed to delete file:', e); }
      
      if (error) {
        resolve({
          success: false,
          output: '',
          error: stderr || error.message
        });
      } else {
        resolve({
          success: true,
          output: stdout
        });
      }
    });
  });
}