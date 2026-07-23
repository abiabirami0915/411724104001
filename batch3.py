# l={1,2,3.14,"Hello",True}
# l.append("Tomorrow")
# l.pop(2)
# print(l)

# s=set()
# s.add(1)
# s.add(1)
# print(s)
# d={1:'A',2:'B',3:'C'}
# for k,v in d.items():
#     print(k,v)

# def fun1():
#     return "hema"
# print(fun1())

# class Class1():
#     def __init__(self,i):
#         self.i=i;
#     def func1(self):
#         print(self.i)
#     def func2(self,j):
#         print(j)
# obj=Class1(2)
# obj.func1()
# obj.func2(4)

d={"name":"hema",
"age":19,
"salary":90808,
}
import json 
res=json.dumps(d)
print(res)
print(type(res))

with open("usersbatch3.json","r") as file:
    data=json.load(file)

print(type(data))