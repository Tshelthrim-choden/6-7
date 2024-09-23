interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  function calculateExercises(dailyHours: number[], target: number): ExerciseResult {
    const periodLength = dailyHours.length;
    const trainingDays = dailyHours.filter(day => day > 0).length;
    const totalHours = dailyHours.reduce((acc, day) => acc + day, 0);
    const average = totalHours / periodLength;
    const success = average >= target;
  
    let rating: number;
    let ratingDescription: string;
  
    if (average >= target) {
      rating = 3;
      ratingDescription = "great job!";
    } else if (average >= target * 0.75) {
      rating = 2;
      ratingDescription = "not too bad but could be better";
    } else {
      rating = 1;
      ratingDescription = "you need to work harder";
    }
  
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average
    };
  }
  
 
  const exerciseArgs = process.argv.slice(2); 
  
  if (exerciseArgs.length < 2) {
    console.log('Please provide the target value followed by daily exercise hours.');
  } else {
    const target = Number(exerciseArgs[0]);
    const dailyHours = exerciseArgs.slice(1).map(Number);
  
    if (isNaN(target) || dailyHours.some(isNaN)) {
      console.log('All inputs should be numbers.');
    } else {
      console.log(calculateExercises(dailyHours, target));
    }
  }
  