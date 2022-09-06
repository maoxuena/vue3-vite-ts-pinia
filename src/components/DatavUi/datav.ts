export async function createComponent(name: string) {
  const path = name.substring(1)
  switch (path) {
    // text
    case 'BasicText': {
      const comModule = await import(`./BaseComp/Text/${path}/src/${path}.ts`)
      return new comModule.default()
    }

    default:
      throw Error(`Unknown component type: ${name}.`)
  }
}
