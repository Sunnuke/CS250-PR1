Mc-02 answer only appears in the top left
1. run live server [pass] loads normally
2. run application [pass] runs normally
3. start quiz [pass] starts up without issues
4. select any option [fails] (answer always in top left) [code bug]
5. observe if option are different [pass]
6. (answer remains in the top left but options are different)
   Before Bug fix
   <img width="1920" height="1080" alt="Screenshot (62)" src="https://github.com/user-attachments/assets/c2e1d8cb-ba3f-4c2a-8ae3-3e93e576d202" />
<img width="1920" height="1080" alt="Screenshot (61)" src="https://github.com/user-attachments/assets/c54efc06-4afe-47b8-b6cd-51c852649536" />
<img width="1920" height="1080" alt="Screenshot (63)" src="https://github.com/user-attachments/assets/c8bdca68-8aea-4c4a-a6b6-0d9b40ec6d74" />
all answers are always in the top left without any changes throughout the quiz.

after bug fixes:

1. run live server [pass] loads normally
2. run application [pass] runs normally
3. start quiz [pass] starts up without issues
4. select any option [pass] (now the right answer moves to different boxes)
5. observe if option are different [pass] (the answer is now not always in the top left besides random chance)
6. all tests now pass without issues
<img width="1920" height="1080" alt="Screenshot (66)" src="https://github.com/user-attachments/assets/57cc032c-8e15-4af4-af9e-c074c7ba0322" />

<img width="1920" height="1080" alt="Screenshot (67)" src="https://github.com/user-attachments/assets/bb52c595-c4de-4657-9b3e-5771455ed23a" />

<img width="1920" height="1080" alt="Screenshot (69)" src="https://github.com/user-attachments/assets/6667da79-9d49-4e8e-88a6-1a39f9c52aed" />

<img width="1920" height="1080" alt="Screenshot (68)" src="https://github.com/user-attachments/assets/f158175d-305a-4bac-8642-f01ecc3b3c5c" />

bug fix two MC 01 Answers remain static and do not move from each box


both bugs are closely tied, the first fix mc 02 solved this one when we randomized
the consts and now they are placed in each box at random which also solves this
issue.

the same tests were used as above. 

live server start up
run application 
start quiz
select any option
observe each question check for randomization

no changes were needed for this bug
