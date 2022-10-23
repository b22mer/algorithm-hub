

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {

            String str=br.readLine();
            if(str.equals(".")) break;

            Stack<Character> stack=new Stack<>();
            for(int i=0; i<str.length(); i++){

                if(str.charAt(i)=='(' ||  str.charAt(i)=='['){
                    stack.push(str.charAt(i));
                }else if(!stack.isEmpty()){
                    if( (str.charAt(i)==')'&&stack.peek()=='(') || (str.charAt(i)==']'&&stack.peek()=='[') ){
                        stack.pop();
                    }else if((str.charAt(i)==')'&&stack.peek()!='(') || (str.charAt(i)==']'&&stack.peek()!='[') ){
                        stack.push(str.charAt(i));
                    }
                }else if(stack.isEmpty() && ((str.charAt(i)==')'||str.charAt(i)==']'))){
                    stack.push(str.charAt(i));
                    break;
                }


            }
            if(stack.isEmpty()){
                System.out.println("yes");
            }else{
                System.out.println("no");
            }


        }
    }
}