git: 
	@git pull
	@git add .
	@git commit -m "$m" #m="your message"
	@git push 

status:
	@git status

code:
	@code .

cohere:
	@npm run embeddings-cohere

titan:
	@npm run embeddings-titan

