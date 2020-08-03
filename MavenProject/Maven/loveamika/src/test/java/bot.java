import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class bot {
   public static void main(String agrs[]) {

      WebDriverManager.chromedriver().setup();
      WebDriver driver = new ChromeDriver();
      driver.get("https://loveamika.com/");
      driver.switchTo().frame("automat-webchat-0a2c72bb-3ea8-43d8-89d3-51810ac85662");
      driver.findElement(By.xpath("//button/img[@class='css-1jfg77i']")).click();

   }
}