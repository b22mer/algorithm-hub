

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main{
	static int result=0;
    public static void main(String[] args) throws IOException {
        // 이분 탐색 => 공부하자

        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        String st[]= br.readLine().split(" ");
        int K=Integer.parseInt(st[0]);
        int N=Integer.parseInt(st[1]);
        int line[]=new int[K]; // 랜선의 길이를 받을 배열
       
        for(int i=0; i<K; i++) {
        	line[i]=Integer.parseInt(br.readLine());
        }
        
        Arrays.sort(line);
        long min=1;
        long mid=0;
        long max=line[K-1];
        long result=0;
        while(max >= min) {
        	mid=(max+min)/2;
        	
            for(int i=0; i<K; i++) {
            	result+=line[i]/mid;
         
            }
            
            
            if(result>=N) {
            	min=mid+1;
            }else {
            	max=mid-1;
            }
            
            result=0;
          
        }
        System.out.println(max);

        
        

}
}