class ApiResponse {
    status: number;
    message: string;
    data: any;
    success: boolean;
  
    constructor(status: number, message: string, data: any = {}) {
      this.status = status;
      this.message = message;
      this.data = data;
      this.success = status < 400;
    }
  }
  // docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiYjA1M2JlNDk2NGEzNzU0MjU1ZjFiM2NmMTc5NTAyZWQiLCJ0IjoiMzI2M2U1ZDAtNGYzOC00MGY2LThlMzktNTcxNTA0MWI5ZmQ5IiwicyI6Ik4yTmtPREl6T1RRdFl6UmlNUzAwT0RKbExUaG1abVl0TmpBME0yVmtZelkwWVdNMiJ9
  export { ApiResponse };