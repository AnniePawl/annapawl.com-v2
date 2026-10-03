// Utility function - takes conditional class names and returns clean string
export function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}
