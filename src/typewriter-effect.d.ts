declare module 'typewriter-effect' {
  import { Component } from 'react'

  interface TypewriterOptions {
    strings?: string[]
    autoStart?: boolean
    loop?: boolean
    deleteSpeed?: number
    delay?: number
    cursor?: string
    wrapperClassName?: string
    cursorClassName?: string
  }

  interface TypewriterProps {
    options?: TypewriterOptions
    onInit?: (typewriter: unknown) => void
  }

  export default class Typewriter extends Component<TypewriterProps> {}
}
