import React, { ReactElement, useMemo, useState } from 'react'
import shortid from 'shortid'
import styled from 'styled-components'
import { createContainer } from 'unstated-next'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props: { active: boolean }) => props.active ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
`

const ModalState = () => {
  const [modals, setModals] = useState<{ [key: string]: ReactElement }>({})

  const open = (modal: ReactElement, key?: string) => {
    const id = `${key || shortid.generate()}`
    setModals(modals => {
      let newModals = {...modals}
      newModals[id] = React.cloneElement(modal, { id, dismiss: () => close(id) })
      return newModals
    })
    return id
  }

  const modalsStack = useMemo(() => {
    return Object.keys(modals).map(key => modals[key])
  }, [modals])

  const lastModalKey = useMemo(() => {
    return Object.keys(modals)[Object.keys(modals).length - 1]
  }, [modals])

  const close = (key?: string) => {
    let keyToRemove = key || lastModalKey
    setModals(modals => {
      let newModals = {...modals}
      delete newModals[keyToRemove]
      return newModals
    })
  }

  return { open, close, modals: modalsStack }
}

const ModalContainer = createContainer(ModalState)

const useModalState = ModalContainer.useContainer

const Modals = () => {
  const { modals, close } = useModalState()

  if (modals.length === 0) return null
  return <>{modals.map((m, i) => <Overlay onClick={() => close()} active={i === modals.length - 1}>
    <div onClick={e => {
      e.stopPropagation()
      e.preventDefault()
    }}>
      {m}
    </div>
  </Overlay>)}</>
}


const ModalProvider = (props: any) => {
  return <ModalContainer.Provider>
    <Modals />
    { React.cloneElement(props.children, props) }
  </ModalContainer.Provider>
}

export {
  ModalProvider,
  useModalState
}
