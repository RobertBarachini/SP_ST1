from bs4 import BeautifulSoup as soup

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

import time
import datetime

NOT_FOUND = "not found"
MAX_HTTP_RETRIES = 10
WARNING = "[WARNING] "
OK = "[OK] "
ERROR = "[ERROR] "
# spremeni TODO: URL NA PRODUKCIJO
URL = "https://spherokuapp123.herokuapp.com/"
USERNAME = "rm@gmail.com"
PASSWORD = "rmPASS12345"

def initDriver():
    options = Options()
    # options.set_headless(headless=True)
    options.add_argument("--window-size=1920x1080")
    driver = webdriver.Chrome(options=options)
    return driver

def fullyLoadPage(URL, driver):
    driver.get(URL)
    try:
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, '/html/body/glava/nav/a')))
        time.sleep(5)
        html = driver.execute_script("return document.documentElement.outerHTML")
        return html
    except:
        return NOT_FOUND

def checkIndexPagePosts(page_soup,driver):
    print("--------------------------------------------------------------")
    print("Checking posts on index page...")
    try:
        # iz strani izvlece vse post-e
        posts = page_soup.find_all("div", class_="card-body")
        if len(posts) == 0:
            #ce nisi nasel posto-v izpisi warning in vrnit not found
            print(WARNING + " No posts on index page!")
            return NOT_FOUND
        else:
            #ce si nasel post-e jih vrni
            print(OK + " Found " + str(len(posts)) + " posts on index page")
            return posts
    except:
        print(ERROR + " at getting index page posts!")
        return NOT_FOUND

def getCurrentPage(driver):
    html = driver.execute_script("return document.documentElement.outerHTML")
    return soup(html, "html.parser")
def testSearch(driver, posts=None, titleToSearch=None):
    print("--------------------------------------------------------------")
    print("Testing search on index page...")
    try:
        #ce podas titleToSearch potem isci ta naslov
        if titleToSearch:
            title = titleToSearch
        else:
            # drugace vzames prvega izmed najdenih post-ov in preizkusis ce ga search najde
            title = posts[0].find("h5", class_="ng-binding").text

        print("Searching for post with title " + '"title"')
        searchInput = driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/ul/form/input')
        searchInput.send_keys(str(title))
        searchInput.submit()
        time.sleep(4)
        page = getCurrentPage(driver)
        posts = checkIndexPagePosts(page, driver)
        if posts is not NOT_FOUND and len(posts) > 0:
            #idi cez poste ki si jih dobil po search in najdi tistega ki si iskal
            for post in posts:
                if post.find("h5", class_="ng-binding").text == title:
                    print(OK + "Search found " + title + " in search results")
                    return "OK"
                else:
                    print(ERROR + " search found post not matching -> " + title)
                    return NOT_FOUND
            print(ERROR + "Search did NOT found " + title + " in search results!")
            return NOT_FOUND
    except:
        print(ERROR + " at trying index page search!")
        return NOT_FOUND
def tryLogin(driver):
    print("--------------------------------------------------------------")
    try:
        loginButton = driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/div/a')
        if loginButton:
            loginButton.click()
            time.sleep(3)
            inputEmail = driver.find_element_by_xpath('//*[@id="email"]')
            inputPassword = driver.find_element_by_xpath('//*[@id="password"]')
            inputEmail.send_keys(USERNAME)
            inputPassword.send_keys(PASSWORD)
            inputEmail.submit()
            time.sleep(3)
            if driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/div'):
                print(OK + " Uspesno se loginal")
            else:
                print(ERROR + "Napak pri loginu")
        else:
            print(WARNING + " Already logged in !")
            print("Aborting trying to login..")
            return
    except:
        print(ERROR + "Napaka pri testiranju login-a")
        return NOT_FOUND
def addImage(driver):
    print("--------------------------------------------------------------")
    try:
        addImageButton = driver.find_element_by_xpath('//*[@id="modalOkno"]/div[2]/div[1]/a[1]')
        addImageButton.click()
        time.sleep(4)
        titleInput = driver.find_element_by_xpath('//*[@id="title"]')
        urlInput = driver.find_element_by_xpath('//*[@id="url"]')
        descriptionInput = driver.find_element_by_xpath('//*[@id="description"]')
        tagsInput = driver.find_element_by_xpath('//*[@id="tags"]')
        submitButton = driver.find_element_by_xpath('/html/body/main/div/div/div/section/div/form/div[4]/button')
        titleInput.send_keys('Test')
        urlInput.send_keys('https://i.ibb.co/hX5jY13/aleksius.jpg')
        descriptionInput.send_keys('Testni opis')
        tagsInput.send_keys('#Test')
        submitButton.click()
        time.sleep(2)
        homeButton = driver.find_element_by_xpath('/html/body/glava/nav/a')
        homeButton.click()
        time.sleep(2)
        if testSearch(driver,None,'Test') != NOT_FOUND:
            print(OK + "Uspesno dodal post z sliko!")
        else:
            print(ERROR + "Napaka pri dodajanju post-a add image!")
    except:
        print(ERROR + "Napaka pri dodajanju post-a add image!")

def createBasicPosts(driver):
    try:
        createPostButton = driver.find_element_by_xpath('/html/body/div/div/div/button')
        if createPostButton:
            createPostButton.click()
            time.sleep(2)
            page = getCurrentPage(driver)
            # links[0] = Add Image, links[1] = Add Embeded, links[2] = Add Story
            links = page.find("div", class_="modal-body").findAll("a")
            addImage(driver)
            time.sleep(2)
        else:
            print(ERROR + "Napaka pri pridobivanju gumba za kreiranje post-ov")
    except:
        print(ERROR + " Napaka pri kreiranju post-ov!")
def addComment(driver):
    try:
        post = driver.find_element_by_class_name('card-img-top')
        post.click()
        time.sleep(2)
        commentInput = driver.find_element_by_xpath('//*[@id="comment"]')
        commentInput.send_keys('Aleksandar za mister Slovenije!')
        commentInput.submit()
        time.sleep(2)
        print(OK + "Uspesno dodal komentar!")
    except:
        print(ERROR + " Napaka pri dodajanju komentarja!")
def editProfile(driver):
    try:
        userButton = driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/div/a')
        userButton.click()
        time.sleep(3)
        editButton = driver.find_element_by_xpath('/html/body/main/header/div/div/div[2]/section/div/div/div/div/a[1]/button')
        editButton.click()
        time.sleep(2)
        nameInput = driver.find_element_by_xpath('//*[@id="name"]')
        surnameInput = driver.find_element_by_xpath('//*[@id="surname"]')
        userNameInput = driver.find_element_by_xpath('//*[@id="username"]')
        emailInput = driver.find_element_by_xpath('//*[@id="email"]')
        passwordInput = driver.find_element_by_xpath('//*[@id="password"]')
        password2Input = driver.find_element_by_xpath('//*[@id="password2"]')
        nameInput.send_keys('Robi')
        surnameInput.send_keys('Markac')
        testniUsername = 'test_username'
        userNameInput.send_keys(testniUsername)
        emailInput.send_keys(USERNAME)
        password2Input.send_keys(PASSWORD)
        passwordInput.send_keys(PASSWORD)
        passwordInput.submit()
        time.sleep(3)
        page = getCurrentPage(driver)
        print(OK + 'Uspesno spremenjen username (Edit profile')
    except:
        print(ERROR + " Napaka pri urejanju profila!")

def tryLogout(driver):
    try:
        userButton = driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/div/a')
        userButton.click()
        time.sleep(3)
        logoutButton = driver.find_element_by_xpath('/html/body/main/header/div/div/div[2]/section/div/div/div/div/a[2]/button')
        logoutButton.click()
        time.sleep(3)
        if driver.find_element_by_xpath('//*[@id="navbarsExampleDefault"]/div/a').text == "Login":
            print(OK + "Uspesno se logoutal!")
        else:
            print(ERROR + "Napaka pri logout-u!")

    except:
        print(ERROR + " Napaka pri logout-u!")
def main():
    driver = initDriver()
    html = fullyLoadPage(URL, driver)
    i = 0
    while i < MAX_HTTP_RETRIES and html is NOT_FOUND:
        html = fullyLoadPage(URL, driver)
        i += 1
    page_soup = soup(html, "html.parser")
    posts = checkIndexPagePosts(page_soup,driver)
    testSearch(driver, posts)
    tryLogin(driver)
    createBasicPosts(driver)
    addComment(driver)
    editProfile(driver)
    tryLogout(driver)

if __name__ == '__main__':
    main()