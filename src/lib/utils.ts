type ClassNameValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassNameValue[]
  | { [key: string]: boolean | null | undefined }

function toClassName(value: ClassNameValue): string[] {
  if (!value) {
    return []
  }

  if (typeof value === 'string' || typeof value === 'number') {
    return [String(value)]
  }

  if (Array.isArray(value)) {
    return value.flatMap(toClassName)
  }

  if (typeof value === 'object') {
    return Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([key]) => key)
  }

  return []
}

export function cn(...inputs: ClassNameValue[]) {
  return inputs.flatMap(toClassName).join(' ')
}
