

import java.awt.Point;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

	// 폭탄이 설정된 초기상태
	// 1초후에는 초기설치 폭탄이외에 다 폭탄으로 도배
	// 1초후에 초기설치한 폭탄만 터짐 사방으로
	
	static int R, C, N, cnt=1;
	static char map[][];
	static int  dx[]= {-1,1,0,0};
	static int  dy[]= {0,0,-1,1};
	
	static List<int[]> pos= new ArrayList<>();
	public static void main(String[] args) throws IOException {
		BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
		String st[] =br.readLine().split(" ");
		
		R=Integer.parseInt(st[0]);
		C=Integer.parseInt(st[1]);
		N=Integer.parseInt(st[2]);
		
		map=new char[R][C];
		for(int i=0; i<R; i++) {
			String str=br.readLine();
			for(int j=0; j<C; j++) {
				map[i][j]=str.charAt(j);
				if(map[i][j]=='O') pos.add(new int[] {i,j});
			}
		}
		
		while(true) {
			
			if (cnt==N) break; // 1초일때, 
			cnt++; 	
			for(int i=0; i<R; i++) {
				for(int j=0; j<C; j++) {
					if(map[i][j]!='O') map[i][j]='O';
				}
			}
			if (cnt==N) break; // 2초일때
			cnt++;
			for(int i=0; i<pos.size(); i++) {
				
				for(int j=0; j<4; j++) {
					map[pos.get(i)[0]][pos.get(i)[1]]='.';
					int nx=pos.get(i)[0]+dx[j];
					int ny=pos.get(i)[1]+dy[j];

					if(nx<0 || ny<0 || nx>=R || ny>=C) continue;
					map[nx][ny]='.';
				}
			}
			pos.clear();
			if (cnt==N) break; //3초일때
			for(int i=0; i<R; i++) {
				for(int j=0; j<C; j++) {
					if(map[i][j]=='O') pos.add(new int[] {i,j});
				}
			}
		}
		
		for(int i=0; i<R; i++) {
			for(int j=0; j<C; j++) {
				System.out.print(map[i][j]);
			}
			System.out.println();
		}
		
	}

	
	

}
