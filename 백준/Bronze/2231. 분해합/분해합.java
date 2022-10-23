

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N=Integer.parseInt(br.readLine());
        int result=0;
        for(int i=0; i<N;i++){
            int num=i;
            int sum=0;

            while(num!=0){
                sum+=num%10;
                num/=10;
            }

            if(sum+i==N){
                result=i;
                break;
            }

        }

        System.out.println(result);
    }
}
//        if(Integer.parseInt(str)<10  ){
//            if(Integer.parseInt(str)%2!=1){
//                System.out.println(Integer.parseInt(str)/2);
//                return;
//            }else{
//                System.out.println(0);
//                return;
//            }
//
//        }
//        int idx=Integer.parseInt(str)/2;
//
//        while (true){
//            int result=idx;
//
//            String src=Integer.toString(idx);
//
//          //  System.out.println(src);
//            if(src.length()!=1){
//                for(int i=0; i<src.length(); i++){
//                    result+=Character.getNumericValue(src.charAt(i));
//                }
//            }
//
//
//            if(result==Integer.parseInt(str)){
//                System.out.println(src);
//                return;
//            }else if(result>Integer.parseInt(str)){
//                System.out.println(0);
//                return;
//            }else{
//                idx+=1;
//            }
//        }





