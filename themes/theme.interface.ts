interface ITheme {
  typography: {
    fontWeightRegular: string,
    fontWeightBold: string,
  },
  colors: {
    primary: string,
    background: {
      default: string,
    }
  }
  colorPrimary: string
}

export default ITheme;
