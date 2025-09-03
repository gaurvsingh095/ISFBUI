// CodeCompilerService.ts
export interface CompileResponse {
    success: boolean;
    output: string;
    error?: string;
  }
  
  export const compileCode = async (
    code: string,
    language: string
  ): Promise<CompileResponse> => {
    try {
      // In a real implementation, this would call your backend API
      // For now, we'll simulate the response
      const response = await fetch('/api/compile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          language,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Compilation error:', error);
      return {
        success: false,
        output: '',
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  };