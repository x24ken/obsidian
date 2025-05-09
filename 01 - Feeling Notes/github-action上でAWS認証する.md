#AWS #github-actions 

```
	name: Configure AWS credentials
	uses: aws-actions/configure-aws-credentials@v2
	with:
		aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
		aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
		aws-region: us-east-1
```
