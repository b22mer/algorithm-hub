import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


class Solution
{  static int N,B;
    static int min;
    static boolean[] isSelected;
    static int [] serviceman;
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
        int T=Integer.parseInt(br.readLine());
        
        for(int tc=1; tc<=T; tc++) {
            String st[]=br.readLine().split(" ");
            N=Integer.parseInt(st[0]);
            B=Integer.parseInt(st[1]);
            min=Integer.MAX_VALUE;
            serviceman=new int[N];
            isSelected=new boolean[N];

            st=br.readLine().split(" ");
            for(int i=0; i<N; i++) {
                serviceman[i]=Integer.parseInt(st[i]);
            }

            subset(0);
            System.out.println("#"+tc+" "+min);
        }
    }

    static void subset(int count) {
        if(count==N) {
            int total=0;
            for(int i=0; i<N; ++i) {
                if(isSelected[i]) {
                    total += serviceman[i];
                }
            }
            if(total>=B){
                if(min>total-B){
                    min=total-B;
                }
            }
            total=0;
            return;
        }

        isSelected[count] = true;
        subset(count+1);
        isSelected[count] = false;
        subset(count+1);

    }
}