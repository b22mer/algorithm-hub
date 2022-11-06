

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main{

    static int N,M,B, time, height;
    static List<Integer> list=new ArrayList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String st[] = br.readLine().split(" ");
        N = Integer.parseInt(st[0]); // 세로
        M = Integer.parseInt(st[1]); // 가로
        B = Integer.parseInt(st[2]); // 인벤토리 블록개수


        for (int i = 0; i < N; i++) {
            st = br.readLine().split(" ");
            // N:3 M:4
            // 0 1 2 3
            // 3
            for (int j = 0; j < M; j++) {
                list.add(Integer.parseInt(st[j]));
            }
        }
        int max = Collections.max(list);
        int min = Collections.min(list);
        long result_sec = 99999999;
        long result_h = 0;

        for(int i=min; i<max+1; i++){
            int tmp_sec = 0;
            int tmp_h = B;
            for(int j=0; j<(N*M); j++){
                if(list.get(j)>i){
                    tmp_sec+=(list.get(j)-i)*2;
                    tmp_h+=(list.get(j)-i);
                }else{
                    tmp_sec+=(i-list.get(j));
                    tmp_h-=(i-list.get(j));
                }
            }
            if(tmp_h >= 0){
                if (result_sec >= tmp_sec){
                    result_sec = tmp_sec;
                    result_h = i;
                }
            }
        }
        System.out.println(result_sec+" "+result_h);


    }

}


