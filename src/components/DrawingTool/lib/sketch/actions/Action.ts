import Sketch from "../Sketch"

export interface Props {
  sketch: Sketch
}
export default abstract class Action {
  readonly sketch: Sketch 

  abstract readonly actionType: string

  constructor(props: Props) {
    this.sketch = props.sketch
  }

  abstract draw(): void

  abstract serialize(): string

  abstract deserialize(serialized: string): void

  abstract destroy(): void
}