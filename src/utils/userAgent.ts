import agent from "@egjs/agent";

export const isIOS = () => agent().os.name === 'ios';