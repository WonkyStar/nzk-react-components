import * as React from "react"
import { MoveableManagerInterface, Renderer } from "react-moveable"
import Icon from "../../../Icon"

export default {
    name: "placeable",
    props: {},
    events: {},
    render(moveable: MoveableManagerInterface<any, any>, React: Renderer) {
      const rect = moveable.getRect()
      const { pos1, pos2 } = moveable.state
      const Placeable = moveable.useCSS("div", `
        {
            position: absolute;
            left: 0px;
            top: 0px;
            will-change: transform;
            transform-origin: 0px 0px;
            pointer-events: none;
        }
        .placeable-icon {
            width: 24px;
            height: 24px;
            background: #4af;
            border-radius: 100%;
        }
        `);
        return <Placeable key="placeable" className="moveable-placeable" style={{
            transform: `translate(${pos2[0] - (pos2[0] - pos1[0])/2}px, ${pos2[1] - (pos2[1] - pos1[1])/2}px) rotate(${rect.rotation}deg) translateY(-54px) translateX(-12px)`,
        }}>
          <div className='placeable-icon'>
            <Icon name='refresh' />
          </div>
        </Placeable>
    }
} as const;