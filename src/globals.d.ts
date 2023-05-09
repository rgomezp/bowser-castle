declare var define: {
  (name: string, factory: (...args: any[]) => any): any;
  (deps: string[], factory: (...args: any[]) => any): any;
  amd: boolean;
};
