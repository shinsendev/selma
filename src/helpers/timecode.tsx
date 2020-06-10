class Timecode {

  static convert(timecode:number) {
    const hours = Math.floor(timecode / 3600);
    const minutes = Math.floor(timecode % 3600 / 60);
    const seconds = Math.floor(timecode % 3600 % 60);

    return (hours?('0' + hours).slice(-2)+':':'' )+ ('0' + minutes).slice(-2) + ":" + ('0' + seconds).slice(-2);
  }
}

export default Timecode;