const createRange = (start: number, end: number) => {
    let length = end - start + 1;
    /*
          Create an array of certain length and set the elements within it from
        start value to end value.
      */
    return Array.from({ length }, (_, index) => index + start);
  };

  export default createRange