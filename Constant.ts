interface ISystem {
  $Set: {
    Resize: string
    BreakPoint: string
  }
  $Get: {
    Window: string
    BreakPoint: string
  }
  $Call: {
  }
}

export const SystemConst: ISystem = {
  $Set: {
    Resize: 'SET/SYSTEM/WINDOW/RESIZE',
    BreakPoint: 'SET/SYSTEM/WINDOW/BREAKPOINT'
  },
  $Get: {
    Window: 'GET/SYSTEM/WINDOW',
    BreakPoint: 'GET/SYSTEM/WINDOW/BREAKPOINT'
  },
  $Call: {
  }
}

export const MainConst = {
  $Set: {
    List: 'SET/LIST/API/GET/LIST'
  },
  $Get: {
    List: 'GET/LIST/API/GET/LIST'
  },
  $Call: {
    List: 'CALL/LIST/API/GET/LIST'
  }
}