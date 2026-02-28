export class PublicIpProvider {
  async getClientIp(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = (await response.json()) as { ip: string };
      return data.ip;
    } catch {
      return '127.0.0.1';
    }
  }
}
