function count_vowels() {
    let s = document.getElementById("sent").value;

    let len = s.length;
    let vowels=[];
    let index=[];
    let location=[];
    let letters=['a','e','i','o','u','A','E','I','O','U'];
    

    for(i=0; i<len; i++)
    {
        for(j=0;j<10;j++)
        {
            if (s[i]==letters[j])
            {
                index.push(i);
                location.push(i+1);
                vowels.push(s[i]);
            }
        }
    }
    console.log(vowels)
    console.log(index)
    console.log("Sentence: "+ s);

    document.getElementById("print").innerText = "The vowels with their index & location in the given sentence are: " 
    +"\n"+"Vowels: "+vowels+"\n"+"Index: "+index+"\n"+"Location: "+location;

}