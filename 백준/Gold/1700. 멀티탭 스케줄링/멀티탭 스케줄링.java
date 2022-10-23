
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Queue;

public class Main {
	
	static int holeNum, usingNum, min;

	static int multiTap[];
	static HashSet<Integer> schedule;
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		String st[] =br.readLine().split(" ");
		schedule=new HashSet<>();
		
		
		holeNum=Integer.parseInt(st[0]);
		usingNum=Integer.parseInt(st[1]);
		
		multiTap=new int[usingNum];
		
		st=br.readLine().split(" ");
		for(int i=0; i<usingNum; i++) {
					multiTap[i]=Integer.parseInt(st[i]);
		}
		
		int cnt = 0;
		
		for(int i = 0; i < usingNum; i++) {
			
			if(schedule.contains(multiTap[i])) 
				continue;
			
			if (schedule.size() < holeNum) {
				schedule.add(multiTap[i]);
				continue;
			}
		
			int max = Integer.MIN_VALUE, pick = -1;
			for (int num : schedule) {
				int temp = 0;	
				for (int j = i + 1; j < usingNum; j++) {
					if (num == multiTap[j]) {
						break;
					}
					temp++;
				}
				if (temp > max) {
					pick = num;
					max = temp;
				}

			}
			schedule.remove(pick);
			schedule.add(multiTap[i]);

			cnt++;
		}
		
		System.out.println(cnt);



			
		}


		

	}


