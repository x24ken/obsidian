#AWS 

```
- name: Deploy to S3
	run: aws s3 sync dist s3://github-action-s3-test --delete
```

[[S3のオプション --delete]]