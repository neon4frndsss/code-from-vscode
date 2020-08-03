import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import io.github.bonigarcia.wdm.WebDriverManager;

public class bot {
   public static void main(String agrs[]) {

      WebDriverManager.chromedriver().setup();
      WebDriver driver = new ChromeDriver();
      WebDriverWait wait = new WebDriverWait(driver, 20);
      driver.manage().window().maximize();
      driver.get("https://www.lazada.com.ph/");
      driver.findElement(By.cssSelector("input[id='q']")).sendKeys("N95 Mask" + Keys.ENTER);
      String productName = driver.findElement(By.xpath("(//a[contains(.,'N95')])")).getText();
      driver.findElement(By.xpath("(//div[@class='cRjKsc'])")).click();
      Assert.assertEquals(driver.findElement(By.cssSelector("span[class='pdp-mod-product-badge-title']")).getText(),
            productName);

      while (!(driver.findElement(By.xpath("//span/input[@type='text']")).getText().equals("5"))) {
         driver.findElement(By.cssSelector("a[class*='handler-up']")).click();
      }
      ;
      driver.findElement(By.cssSelector("button[class*='pdp-button_theme_orange']")).click();
      WebElement frameLogin=driver.findElement(By.xpath("//iframe[@class='login-iframe']"));
      driver.switchTo().frame(frameLogin);
      driver.findElement(By.xpath("//input[contains(text(),'Please enter your Phone Number or Email')]")).sendKeys("Username@test.com");
      driver.findElement(By.xpath("//input[@type='password']")).sendKeys("Open@12345");
      driver.findElement(By.cssSelector("button[type='submit']")).click();
      driver.quit();
   }
}