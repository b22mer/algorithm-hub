
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Queue;

public class Main {

	static char map[][];
	static boolean visit[][];
	static char color;
	static int destroyCnt, rCnt, gCnt, bCnt, pCnt, yCnt, colCnt, result, solution;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		List<Character> colorList = new ArrayList<Character>();
		List<Boolean[][]> visitList = new ArrayList<>();
		map = new char[12][6];
		visit = new boolean[12][6];

		for (int i = 0; i < 12; i++) {
			String str = br.readLine();
			for (int j = 0; j < 6; j++) {
				map[i][j] = str.charAt(j);
				if (map[i][j] == 'R')
					rCnt++;
				else if (map[i][j] == 'G')
					gCnt++;
				else if (map[i][j] == 'Y')
					yCnt++;
				else if (map[i][j] == 'P')
					pCnt++;
				else if (map[i][j] == 'B')
					bCnt++;
			}
		}

		if (rCnt < 4 && gCnt < 4 && yCnt < 4 && pCnt < 4 && bCnt < 4) {
			System.out.println(0);
			return;
		}
		
		while(true) {
			
			// 반복문 시작
			for (int i = 0; i < 12; i++) {
				for (int j = 0; j < 6; j++) {
					colCnt = 0;
					if (map[i][j] != '.' && map[i][j] != 'x' ) {
						//System.out.println(map[i][j]+": 입성");
						color = map[i][j];
						dfs(i, j, color);
						
						// 4개이상 인접한 부분을 파괴하는 부분
						if (colCnt >= 4) {
							result++;
							for (int x = 0; x < 12; x++) {
								for (int y = 0; y < 6; y++) {
									if (visit[x][y]) {
										map[x][y] = 'x';
										// visit[x][y]=false;
									}
								}
							}
							
//							System.out.println("파괴후=============");
//							for (int x = 0; x < 12; x++) {
//								System.out.println(Arrays.toString(map[x]));
//							}
//							System.out.println("=============");

						}else {
							visit=new boolean[12][6];
						}
					} 
				}
			}// for문 끝
			
			if(result>0) {
				result=0;
				solution++;
				// 파괴되고 바닥으로 내리는 파트
				for (int x = 0; x < 12; x++) {
					for (int y = 0; y < 6; y++) {
						if (map[x][y]=='x') {
							// System.out.println(x+":"+y);
							for (int k = x; k >= 1; k--) {
								if (map[k - 1][y] != '.') {
									map[k][y] = map[k - 1][y];
									map[k - 1][y] = '.';
								} else {
									map[k][y] = map[k - 1][y];
								}

							}

							visit[x][y] = false;

						}

					}
				}
//				System.out.println("중력후=============");
//				for (int x = 0; x < 12; x++) {
//					System.out.println(Arrays.toString(map[x]));
//				}
//				System.out.println("=============");
				
			}else {
				System.out.println(solution);
				return;
			}

			
			
			
		
		}

	

	}

	static void dfs(int x, int y, char color) {

		if (x < 0 || y < 0 || x >= 12 || y >= 6) {
			return;
		}

		if (map[x][y] == color && !visit[x][y]) {
			colCnt++;
			visit[x][y] = true;

			dfs(x + 1, y, color);
			dfs(x - 1, y, color);
			dfs(x, y + 1, color);
			dfs(x, y - 1, color);
		}

	}

}

//for (int i = 0; i < 12; i++) {
//	for (int j = 0; j < 6; j++) {
//		colCnt = 0;
//		if (map[i][j] == 'P' && pCnt >= 4) {
//			System.out.println("P 입성");
//			color = 'P';
//			dfs(i, j, color);
//		} else if (map[i][j] == 'R' && rCnt >= 4) {
//			System.out.println("R 입성");
//			color = 'R';
//			dfs(i, j, color);
//		} else if (map[i][j] == 'Y' && yCnt >= 4) {
//			System.out.println("Y 입성");
//
//			color = 'Y';
//			dfs(i, j, color);
//		} else if (map[i][j] == 'G' && gCnt >= 4) {
//			System.out.println("G 입성");
//
//			color = 'G';
//			dfs(i, j, color);
//		} else if (map[i][j] == 'B' && bCnt >= 4) {
//			System.out.println("B 입성");
//
//			color = 'B';
//			dfs(i, j, color);
//		}
//
//		// 4개이상 인접한 부분을 파괴하는 부분
//		if (colCnt >= 4) {
//			result++;
//			for (int x = 0; x < 12; x++) {
//				for (int y = 0; y < 6; y++) {
//					if (visit[x][y]) {
//						map[i][j] = '.';
//						// visit[x][y]=false;
//					}
//				}
//			}
//
//			// 파괴되고 바닥으로 내리는 파트
//			for (int x = 0; x < 12; x++) {
//				for (int y = 0; y < 6; y++) {
//					if (visit[x][y]) {
//						// System.out.println(x+":"+y);
//						for (int k = x; k >= 1; k--) {
//							if (map[k - 1][y] != '.') {
//								map[k][y] = map[k - 1][y];
//								map[k - 1][y] = '.';
//							} else {
//								map[k][y] = map[k - 1][y];
//							}
//
//						}
//
//						visit[x][y] = false;
//
//					}
//
//				}
//			}
////      
//			System.out.println("=============");
//			for (int x = 0; x < 12; x++) {
//				System.out.println(Arrays.toString(map[x]));
//			}
//			System.out.println("=============");
//		}
//
//		rCnt = 0;
//		gCnt = 0;
//		bCnt = 0;
//		yCnt = 0;
//		pCnt = 0;
//		colCnt = 0;
//		for (int x = 0; x < 12; x++) {
//			for (int y = 0; y < 6; y++) {
//				if (map[i][j] == 'R')
//					rCnt++;
//				else if (map[i][j] == 'G')
//					gCnt++;
//				else if (map[i][j] == 'Y')
//					yCnt++;
//				else if (map[i][j] == 'P')
//					pCnt++;
//				else if (map[i][j] == 'B')
//					bCnt++;
//			}
//		}
//
//	}
//}