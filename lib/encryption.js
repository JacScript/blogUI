function split(str, index) {
    const result = [str.slice(0, index), str.slice(index)];
  
    return result;
  }
 const encrypt = () => {
    const currentDate = new Date()
    
    const [first, second] = split(process.env.POST_SECRET , currentDate.getMonth());
    let dateScramble = currentDate.getFullYear() / currentDate.getHours() + currentDate.getMonth();
    return currentDate.getMonth().toString() + first +  dateScramble.toString() + second + currentDate.getHours().toString();

}

export default encrypt