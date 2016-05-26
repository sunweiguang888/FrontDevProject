import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;

public class CssAndJsCreatorByHtml {

	public static void main(String[] args) throws Exception{
		// TODO Auto-generated method stub
		createFile("D:/代码", "D:/代码/css/", "css", "@charset \"UTF-8\";");
		createFile("D:/代码", "D:/代码/js/", "js", "");
//		createIncludString("D:/代码", "<link rel=\"stylesheet\" href=\"css/{path}\"/>");
//		createIncludString("D:/代码", "<script src=\"js/{path}\"></script>");
	}

	public static void createFile(String htmlDir, String targetDir, String suffix, String writeWord){
		try{
			File dir = new File(htmlDir);
			for(File file : dir.listFiles()){
				if(file.isFile()){
					File newFile = new File(targetDir+file.getName().replaceAll("html", suffix));
					newFile.createNewFile();
					if(!writeWord.isEmpty()){
						BufferedWriter bw = new BufferedWriter(new FileWriter(newFile));
						bw.write(writeWord);
						bw.newLine();
						bw.close();
					}
					System.out.println(newFile.getAbsolutePath());
				}
			}
		}catch (Exception e) {
			System.out.println(e);
		}
	}
	public static void createIncludString(String htmlDir, String str){
		try{
			File dir = new File(htmlDir);
			for(File file : dir.listFiles()){
				if(file.isFile()){
					System.out.println(str.replace("{path}", file.getName()));
				}
			}
		}catch (Exception e) {
			System.out.println(e);
		}
	}
	
	
	

}
