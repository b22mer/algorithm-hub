

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.List;
import java.util.Queue;
import java.util.Stack;

public class Main {
    static Stack<Integer> load=new Stack<>();
    static List<String> result=new Stack<>();
    static Queue<Integer> ref=new ArrayDeque<>();

    public static void main(String[] args) throws IOException {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        int N=Integer.parseInt(br.readLine());
        for(int i=0; i<N; i++) ref.add(Integer.parseInt(br.readLine()));
        //System.out.println(ref);
        //result 4 3 6 8 7 5 2 1
        int i=1;
        while (!ref.isEmpty()){

            if(!load.isEmpty()&& ref.peek().equals(load.peek())){

                load.pop();
                ref.poll();
                result.add("-");
            }else if(ref.peek()>=i){
                    load.push(i++);
                    result.add("+");
            }else{
                System.out.println("NO");
                return;
            }
        }

        int size=result.size();
        for(int j=0;j<size; j++) System.out.println(result.get(j));


    }

}
