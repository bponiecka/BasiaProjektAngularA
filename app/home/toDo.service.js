export default class toDoService
{
    constructor($firebaseObject)
    {
        this.firebaseObject = $firebaseObject;
        this.ref = new Firebase("https://raz.firebaseio.com/");
        this.ref.push({
           'user': 'pierwszy anon',
           'title':'drugi anon',
           'completed':'false'
        });
        this.elementref = this.ref.push({
           'user': 'testuser2',
           'title':'testtitle2',
           'completed':'false'
        }); 
    }
    
    getAll()
    {
        return this.firebaseObject(this.ref);
    }
    
    add(value)
    {
        this.ref.push({
           'user': value.user,
           'title': value.title,
           'completed': value.completed
        }); 
    }
};