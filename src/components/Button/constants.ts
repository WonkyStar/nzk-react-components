interface Theme {
  backgroundColor: string;
  color: string;
  strokeColor: string;
  shadowColor: string;
}

export const THEMES: { [key: string]: Theme } = {
  primary: {
    backgroundColor: '#009EE2',
    color: '#fff',
    strokeColor: '#00C5ED',
    shadowColor: '#025899'
  },
  confirm: {
    backgroundColor: '#8CC63F',
    color: '#fff',
    strokeColor: '#AFD752',
    shadowColor: '#579800'
  },
  'the-pink': {
    backgroundColor: '#E40071',
    color: '',
    shadowColor: '',
    strokeColor: ''
  },
  'purple': {
    backgroundColor: '#701EA8',
    color: '',
    shadowColor: '#4E1B6D',
    strokeColor: '#9026C1'
  },
  'red': {
    color: 'white',
    backgroundColor: '#E20514',
    strokeColor: '#F60A21',
    shadowColor: '#931120'
  },
  'orange': {
    color: 'white',
    backgroundColor: '#F29226',
    strokeColor: '#F6B230',
    shadowColor: '#CB6217'
  },
  'green': {
    color: 'white',
    backgroundColor: '#8DC63F',
    strokeColor: '#AED752',
    shadowColor: '#58981F'
  },
  'yellow': {
    color: 'white',
    backgroundColor: '#FEC532',
    strokeColor: '#FEE13A',
    shadowColor: '#C59928'
  }
}

export const SIZES = {
  'xx-large': 142,
  'x-large': 109,
  large: 71,
  regular: 50,
  small: 39,
  'x-small': 30
}
