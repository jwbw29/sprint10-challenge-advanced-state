

























const [wheelState, setWheelState] = useState(1);

const handleClickClockwise = () => {
  setWheelState((prevWheelState) => (prevWheelState % 5) + 1);
};

const handleClickCounterClockwise = () => {
  setWheelState((prevWheelState) => ((prevWheelState - 2 + 5) % 5) + 1);
};
