
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        PriorityQueue<Integer> que= new PriorityQueue<>();

        int N=Integer.parseInt(br.readLine());
        double total=0;
        int list[]=new int[N];
        for(int i=0; i<N; i++) {
            int src= Integer.parseInt(br.readLine());
            list[i]=src;
            que.add(src);
            total+=src;
        }

        Arrays.sort(list);

        int count = 0;
        int max = -1;
        //for문 한개로 돌리는 방식이기에 값이 1개이면 반복문이 돌지 않는다.
        //그렇기에 처음 최빈값은 배열의 첫번째 값으로 저장해 준다.
        int mod = list[0];
        boolean check = false;
        //최빈값 구하는 반복문
        for(int i = 0; i < N - 1; i++) {
            if(list[i] == list[i + 1]) {
                count++;
            }else {
                count = 0;
            }

            if(max < count) {
                max = count;
                mod = list[i];
                check = true;
            }else if(max == count && check == true) {
                mod = list[i];
                check = false;
            }
        }
        System.out.println(Math.round(total / N));
        System.out.println(list[(N - 1) / 2]);
        System.out.println(mod);
        System.out.println(list[N - 1] - list[0]);

    }
}


