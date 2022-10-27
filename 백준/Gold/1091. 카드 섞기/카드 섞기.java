

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int N=Integer.parseInt(br.readLine());
	
		int temp[]=new int[N];
		int sunseo[]=new int[N];
		for(int i=0; i<N; i++) {
			sunseo[i]=i%3;
		}
		
		
		
		int number[]=new int[N];
		int first[]=new int[N];
		String st[]=br.readLine().split(" ");
		for(int i=0; i<N; i++) {
			number[i]=Integer.parseInt(st[i]);
			first[i]=Integer.parseInt(st[i]);
		}
		
		int method[]=new int[N];
		st=br.readLine().split(" ");
		for(int i=0; i<N; i++) {
			method[i]=Integer.parseInt(st[i]);
		}
		
		
		
		
		int cnt=0;
		while(true) {
			
			if(Arrays.equals(sunseo,number)) {
				System.out.println(cnt);
				break;
			}
			
			cnt++;
			for(int i=0; i<N; i++) {
				temp[method[i]]=number[i];
			}
			
			for(int i=0; i<N; i++) {
				number[i]=temp[i];
			}
			
		
			if(Arrays.equals(first,number)) {
				System.out.println(-1);
				break;
			}
			
		}

		
		
	}

}
