
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException  {
	BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
	int N=Integer.parseInt(br.readLine());
	long result=0;
	long r=1;
	String str=br.readLine();
	for(int i=0; i<N; i++) {
		
		double chk=str.charAt(i)-96;
		
		result= (long) ((result+(chk*r))%1234567891);
		r=(r*31)%1234567891;
		
		
	}

		System.out.println(result);
		
	}

	

}