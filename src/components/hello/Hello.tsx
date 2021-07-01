interface HelloProps {
  mood: 'happy' | 'sad'
}

const Hello: React.FC<HelloProps> = ({ mood }) => {
  return <span>Hello world {mood === 'happy' ? '🍻' : '💩'}</span>
}

export default Hello
