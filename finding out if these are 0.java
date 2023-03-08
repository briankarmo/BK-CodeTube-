
public class HelloWorld{

public static void main(String args){
    divisible(25,5);
    divisible(35,6);
}

    public static void divisible( int x, int y){
        while(x>=y){
            x=x-y;
        }
        if (x==0) {System.out.println("yes - it is divisible!")
        else {System.out.println("No, it is not divisible1")

    }
};