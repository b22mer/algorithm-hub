

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;



public class Main {

	static char[][] map;
	static String state[]= {"nam", "dong","seo","book"};
	static String chkState;
	static int dx,dy;
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		map = new char[2 * N +1][2 * N +1];
		int startX = N ;
		int startY = N ;
		dx=startX;
		dy=startY;
		chkState="nam";
		map[startX][startY]='.';
		String cmd = br.readLine();
		for (int i = 0; i < N; i++) {
			char selectCmd = cmd.charAt(i);

			switch (selectCmd) {

			case 'R':
				if(chkState=="nam") {
					chkState="seo";
				}else if(chkState=="seo") {
					chkState="book";
				}else if(chkState=="book") {
					chkState="dong";
				}else if(chkState=="dong") {
					chkState="nam";
				}
				
				break;
			case 'L':
				
				if(chkState=="nam") {
					chkState="dong";
				}else if(chkState=="seo") {
					chkState="nam";
				}else if(chkState=="book") {
					chkState="seo";
				}else if(chkState=="dong") {
					chkState="book";
				}
				break;
			case 'F':
				
				if(chkState=="nam") {
					dx+=1;
					map[dx][dy]='.';	
				}else if(chkState=="seo") {
					dy-=1;
					map[dx][dy]='.';
				}else if(chkState=="book") {
					dx-=1;
					map[dx][dy]='.';
				}else if(chkState=="dong") {
					dy+=1;
					map[dx][dy]='.';
				}
				break;

			}

		}
		int LidxMin=Integer.MAX_VALUE;
		int RidxMax=Integer.MIN_VALUE;
		
		int topIdx=Integer.MAX_VALUE;
		int bottomIdx=Integer.MIN_VALUE;
		
		for(int i=0; i<2*N+1; i++){
			for(int j=0; j<2*N +1; j++){
				if(map[i][j]=='.') {
					LidxMin=Math.min(LidxMin, j);
					RidxMax=Math.max(RidxMax, j);
					
					topIdx=Math.min(topIdx, i);
					bottomIdx=Math.max(bottomIdx, i);
				}
			}
		
		}
		
		
		for(int i=topIdx; i<=bottomIdx; i++){
			for(int j=LidxMin; j<=RidxMax; j++){
				if(map[i][j]=='.') {
					System.out.print('.');
				}else {
					System.out.print('#');
				}
			}
			System.out.println();
		
		}
		

	}

}
