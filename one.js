//QUES 1
/*
const reverseNum = str =>
{
str.toString().split('').reverse().join('');
}
console.log (reverseNum(123456))
*/

//QUES 2
 //write an arrow function that takes in an array of country names and returns the name with the equal characters

// give the length yourself
/*
const check = (names,length1) =>{
names.map(count=>{
   if(count.length===length1)
   {
    console.log(count)
   }
})
}

check(['america','russia','japan','afghanistan','china','nepal'],5)


*/

//QUES 3

/*const find = ({array=[1,2,3,4,5], number=3}={})=>
{
    var filteredAry = array.filter(e => e !== number)
    
     return filteredAry
    
}
console.log(find({}))
console.log(find({array:[2,5,6,7,9],number:7}))*/

//QUES4
/*
const athleteData = 
[

         { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },
    
         { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },
    
         { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },
    
         { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },
    
         { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },
    
         { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },
    
         { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },
    
         { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },
    
         { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },
    
         { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
]
    const athleteIncomeStrings=athleteData.map(({athlete,team,income})=>
    {
        console.log (`${athlete} in ${team} earned ${income}`)
    })
    */
    

    //QUES 5

    /*
   const athleteData = 
[

    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },

    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },

    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },

    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },

    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },

    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },

    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },

    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },

    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },

    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
]

    const results=athleteData.filter(players =>
        (players.income).toString().length>7)
        console.log(results);

    */

//QUES 6
/*

const athleteData = 
[

    { athlete: 'Lionel Messi', team: 'Barcelona', income: 40000000 },

    { athlete: 'Cristiano Ronaldo', team: 'Juventus', income: 30000000 },

    { athlete: 'Neymar', team: 'Paris Saint-Germain', income: 36800000 },

    { athlete: 'Eden Hazard', team: 'Chelsea', income: 10400000 },

    { athlete: 'Mohamed Salah', team: 'Liverpool', income: 4680000 },

    { athlete: 'Kylian Mbappé', team: 'Paris Saint-Germain: An American Musical', income: 17500000 },

    { athlete: 'Luka Modrić', team: 'Real Madrid', income: 9360000 },

    { athlete: 'Harry Kane', team: 'Tottenham Hotspurs', income: 17600000 },

    { athlete: 'Kevin De Bruyne', team: 'Manchester City', income: 5980000 },

    { athlete: 'Paul Pogba', team: 'Manchester United', income: 15080000 }
]


    const filteredArray=athleteData.filter(item=>
    
     {  item.income>10000000? console.log(`${item.athlete} is a great player.`): console.log("GO TO HELL")

     }
    )
    console.log(filteredArray)
    */
    
  // ********************************


  //QUES 8
/* PART ONE:

YES the code given is functional as  the code  can possibly be reached by calls originating from main().
  This would be functional (i.e, code that may possibly execute).

PART TWO:

/

const arrayOfCourses = [

   {

     id: "CNC123",

     courseName: "Cloud Native Computing"

   },



   {

     id: "IOT123",

     courseName: "Internet of things"

   },

   {

     id: "AI123",

     courseName: "Artificial Intelligence"
   }

];

const passedCourses = ["CNC123", "AI123"];
//const[id1,id2]=passedCourses
const result=arrayOfCourses.filter(e => e.id===passedCourses[0]||e.id===passedCourses[1])
result.map(print =>
    {
    console.log(`You have passed ${print.id} ${print.courseName}`)

} )
*/

//QUES 9
/* OUTPUT

        0: { id: 1, name: "umair" },
    
        1:{ id: 2, name: "asad" }
    
        2:{ id: 4, name: "shahbaz" };
*/    


//QUES 10
/*
const data = [

       {
    
         name: "Umair",
    
         Amt: 100
    
       },
    
       {
    
         name: "Asad",
    
         Amt: 100
    
       }
    
     ];
*/
    
    


//QUES 11

/*

Current Day will be displayed.

*/

//QUES 12
/*
let arrayAll=[25, 15, 16, 88, 35, 5] 
let oldest=arrayAll.reduce((acc,val)=> 
{
    if(val>acc)
    {
        acc=val
    }
    return acc
})
let youngest=arrayAll.reduce((acc,val)=>
{
    if(acc>val)
    {
        acc=val
    }
    return acc
})
let difference= (oldest-youngest)
const result = [oldest, youngest, difference]
console.log(result)
    
    */

    //QUES 13
/*
    const  myColor = ["Red", "Green", "White", "Black"]
    console.log(myColor.join(','))
    console.log(myColor.join('+'))

*/

    //QUES 14
/*


    var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
    function mostRepeated(array){
        var result = array[0];
        var tmp = 0;
        for(var i = 0; i < array.length; i++){
          var count = 0;
          for(var j = 0; j < array.length; j++){
            if(array[i]===array[j]){
              count++;
            }
          }
          if(count > tmp){
            tmp = count;
            result = array[i];
          }
        }
        return result;
      }
      console.log(mostRepeated(arr1))



      */
    
           

    







