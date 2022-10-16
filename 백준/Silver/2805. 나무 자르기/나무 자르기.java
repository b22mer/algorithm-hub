import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
	//랜선 자르기와 마찬가지로 이분탐색을 요하는 문제인듯
	public static void main(String[] args) throws IOException {
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		String st[]=br.readLine().split(" ");
		int N=Integer.parseInt(st[0]); // 나무의 수
		int M=Integer.parseInt(st[1]); // 가져가고자 하는 나무길이
		int treeHeight[]=new int[N];
        
		st=br.readLine().split(" ");
		for(int i=0; i<N;i++) treeHeight[i]=Integer.parseInt(st[i]);

		Arrays.sort(treeHeight);
		long max=treeHeight[N-1];
		long min=0;
		long mid=0;
		long result=0;
		
		while(max>=min) {
			mid=(max+min)/2;
			
			for(int i=0; i<N;i++) { // 차가 양수가 되는 값만 result에 더해줌
				if(treeHeight[i]-mid>0)result+=treeHeight[i]-mid;
			}
			
			if(result>=M) min=mid+1; // 목표값 보다 크거나 같게되면 min 값을 하나 늘려준다.
			else max=mid-1;  // 목표값보다 낮게되면 너무 값이 너무 큰것이야! 최대를 구해야하므로 최대에서 하나씩 깎아!
	
			result=0; // 합 초기화
		}
		System.out.println(max);
	}

}
