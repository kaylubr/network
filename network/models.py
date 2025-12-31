from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    followers = models.ManyToManyField("self", symmetrical=False, related_name="followings")
    pass


class Post(models.Model):
    content = models.CharField(max_length=250)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)
    like = models.ManyToManyField(User, symmetrical=False, blank=True)

    def is_owned_by(self, user):
        return self.author == user
    
    def __str__(self):
        return f"{self.content} by: {self.author.username}"