export default abstract class Action {
  abstract serialize(): string

  abstract deserialize(serialized: string): void
}