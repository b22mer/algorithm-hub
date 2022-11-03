

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Queue;

public class Main {

	static int bool=0;
	static int cnt=1;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int N=Integer.parseInt(br.readLine());
		
		for(int t=0; t<N; t++) {
			PriorityQueue<Integer> que= new PriorityQueue(Collections.reverseOrder());
			List<int[]> list=new ArrayList<>();
			String st[]=br.readLine().split(" ");
			int size=Integer.parseInt(st[0]);
			int choice=Integer.parseInt(st[1]);
			int chk=0;
		
			st=br.readLine().split(" ");
			for(int i=0; i<size; i++) {
				list.add(new int[] {i, Integer.parseInt(st[i])});
				if (i==choice) {
					chk=i;
				}
			}
			cnt=1;
			
			while(true) {
				bool=0;
				int point=list.get(0)[1];
				for(int j=1; j<list.size(); j++) {
					if(point<list.get(j)[1]) {
						list.add(list.get(0));
						list.remove(0);
						bool++;
						break;
					}
				}
				
				if(bool==0) {
					if(chk==list.get(0)[0]) {
						
						System.out.println(cnt);
						break;
					}else {
						cnt++;
						list.remove(0);
					}
					
				}
				
			}
		
			
			
			
			
			
			
			
			
		}
		

	}

}	