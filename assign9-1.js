function createObject(name,height){         //classtype
        this.name=name;                     //data member 1
        this.height=height;                 //data member 2

    this.aboutYourself=function(){              //method without parameter
        console.log(`i am ${name},i am ${height}cms height`);
    }
}
var me=new createObject('bala',108);            //creating object constructor
me.aboutYourself();                             //calling the method