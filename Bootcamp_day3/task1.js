class Log {
  constructor(data) {
    this.data = data;
  }

  syslog() {
    try {
      if (this.data === "info") throw new Error("Informational messages");
      if (this.data === "emergency") throw new Error("System is unusable");
      if (this.data === "alert")
        throw new Error("Action must be taken immediately");
      if (this.data === "critical") throw new Error("Critical conditions");
      if (this.data === "error") throw new Error("Error conditions");
      if (this.data === "warning") throw new Error("Warning conditions");
      if (this.data === "notice")
        throw new Error("Normal but significant conditions");
      if (this.data === "debug") throw new Error("Debug-level messages");
    } catch (error) {
      console.log({ error });
    }
  }
}

const appLog = new Log("debug");
console.log(appLog.syslog());
